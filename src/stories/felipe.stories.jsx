import React from 'react';
import Actions from './Actions'

export default {
    title: 'Actions',
    component: Actions,
}

const Template  = (args) => <Actions {...args} />

export const GetRepos = Template.bind({})
GetRepos.args = {
    getRepos: ()=>{}
}