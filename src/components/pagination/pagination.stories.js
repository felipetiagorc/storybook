import React from "react";
import Pagination from "./index";

export default {
    title: 'PaginationTs',
    component: Pagination,
}

const Template = (args) => <Pagination {...args}/>

export const SemProps = Template.bind({});
SemProps.args = {
    total: 0,
    activePage: 0,
}

export const ComTotal = Template.bind({});
ComTotal.args = {
    total: 10,
    activePage: 0,
}

export const Completo = Template.bind({});
Completo.args = {
    total: 10,
    activePage: 5,
}

export const pageLink = Template.bind({});
pageLink.args = {
    total: 10,
    activePage: 5,
    pageLink: 'http://minhapagina.com/page/%page%',
}