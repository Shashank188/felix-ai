export type TableConfig = {
    fixed?: Boolean;
    prop: string,
    label: string,
    width: number
}

export type MockData = {
    data: Array<any>,
    config: Array<any>,
    id: string,
    title: string,
    sql: string,
    desc: string,
    createdby: string,
    createdOn: string
}

import { customer } from "./customer";
import { employee } from "./employee";
import { product } from "./product";

export default {
    customer,
    employee,
    product
}