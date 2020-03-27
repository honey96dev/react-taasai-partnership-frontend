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
    name: 'Withdraw',
    selector: 'withdraw',
    cell: row => numeral(row.withdraw || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
  {
    name: 'Balance',
    selector: 'balance',
    cell: row => numeral(row.balance || 0).format(NUMERAL.FORMAT.FIXED_2),
    sortable: true,
  },
];

export default () => {
  const {auth: {user}} = useSelector(state => state);

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadData = e => {
    setIsLoading(true);
    Service.withdrawList({id: user.id})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          // setItems(res.data);
          setItems([
            {date: "2020-2-1", withdraw: 50, balance: 200},
            {date: "2020-2-16", withdraw: 100, balance: 100},
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
