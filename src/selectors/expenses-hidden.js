// Get hidden expenses

export default (allExpenses, visibleExpenses) => {

    return allExpenses.filter(e => !visibleExpenses.includes(e));

};