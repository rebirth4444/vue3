const getters = {
    dataList: state => state.datatable.dataList,
    dataTotal: state => state.datatable.dataTotal,
    pageSize: state => state.datatable.pageSize,
    pageLength: state => state.datatable.pageLength,
    pageIndex: state => state.datatable.pageIndex,
    isEditor: state => state.datatable.isEditor
}
export default getters