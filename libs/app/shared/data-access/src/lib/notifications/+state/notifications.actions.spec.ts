import * as fromLoadNotifications from './notifications.actions';

describe('loadLoadNotificationss', () => {
  it('should return an action', () => {
    expect(fromLoadNotifications.loadLoadNotificationss().type).toBe(
      '[LoadNotifications] Load LoadNotificationss'
    );
  });
});
