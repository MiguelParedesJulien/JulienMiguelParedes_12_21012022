const pathMocked = {
  url: {
    infoUser(userId) {
      return `../../data/${userId}/userInfo.json`;
    },
    userAverageSession(userId) {
      return `../../data/${userId}/userAverageSessions.json`;
    },
    userActivity(userId) {
      return `../../data/${userId}/userActivity.json`;
    },
    userPerformance(userId) {
      return `../../data/${userId}/userPerformance.json`;
    },
  },
};

export const path = pathMocked;
