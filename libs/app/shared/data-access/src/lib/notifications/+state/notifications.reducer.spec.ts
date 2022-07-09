import { NotificationsInitialState, reducer } from './notifications.reducer';

describe('Load Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(NotificationsInitialState, action);

      expect(result).toBe(NotificationsInitialState);
    });
  });
});
