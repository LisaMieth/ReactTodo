var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'Something to do',
          completed: false,
          createdAt: 111
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
  });
  it('should toggle todo', () => {
    var todos = [
      {
        id: '11',
        text: "Test features",
        completed: true,
        createdAt: 125,
        completedAt: 123
      }
    ];
    var action = {
      type: 'TOGGLE_TODO',
      id: '11'
    }
    var res = reducers.todosReducer(df(todos), df(action));

    expect(res[0].completed).toEqual(false);
    expect(res[0].completedAt).toEqual(null);
  });

  it('should add existing todos', () => {
    var todos = [
      {
        id: '111',
        text: 'Anything',
        completed: false,
        completedAt: null,
        createdAt: 3300
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });
});
