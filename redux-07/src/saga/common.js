export function setLoading(loading) {
    return {
      type: 'SET_LOADING',
      loading,
    }
  }
  
  // 初始化todos
  export function initTodos(list) {
    return {
      type: 'INIT_TODOS',
      list,
    }
  }