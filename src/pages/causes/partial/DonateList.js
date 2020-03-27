import React, {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import DataTable from "react-data-table-component";
import numeral from "numeral";
import dateformat from "dateformat";

import {DATE_FORMAT, NUMERAL, RESULT} from "core/globals";
import Service from "services/causes/DashboardService";

import "./Stats.css";

const columns = [
  {
    name: 'Date',
    selector: 'date',
    cell: row => {
      const date = !!row.date ? dateformat(new Date(row.date), "yyyy-mm-dd") : "";
      return date;
    },
    sortable: true,
  },
  {
    name: 'Contribution',
    selector: 'contribution',
    sortable: true,
  },
  {
    name: 'Contributor',
    selector: 'contributor',
    sortable: true,
  },
  {
    name: 'Balance',
    selector: 'balance',
    cell: row => numeral(row.balance || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
  {
    name: 'Pending',
    selector: 'pending',
    cell: row => numeral(row.pending || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
];

export default () => {
  const {auth: {user}} = useSelector(state => state);

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadData = e => {
    setIsLoading(true);
    Service.donateList({id: user.id})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          // setItems(res.data);
          setItems([
            {date: "2020-3-1", contribution: 10, contributor: "Sebastian B", balance: 100, pending: 8},
            {date: "2020-3-2", contribution: 5, contributor: "Anatoly S", balance: 100, pending: 12},
            {date: "2020-3-5", contribution: 10, contributor: "Sasa M", balance: 112, pending: 5},
            {date: "2020-3-8", contribution: 3, contributor: "Micheal A", balance: 112, pending: 6},
            {date: "2020-3-9", contribution: 9, contributor: "Taasai Ltd", balance: 118, pending: 11},
            {date: "2020-3-10", contribution: 10, contributor: "Etin Z", balance: 129, pending: 3},
          ]);
        } else {
          setItems({});
        }
        setIsLoading(false);
      })
      .catch(err => {
        setItems({});
        setIsLoading(false);
      });
  };

  useEffect(e => {
    loadData();
  }, []);

  const payload = () => (
    <Fragment>
      <div>
        <div className="row">
          <DataTable
            title="Contributions"
            columns={columns}
            data={items}
            fixedHeader
            pagination
          />
        </div>
      </div>

    </Fragment>
  );

  return payload();
}
