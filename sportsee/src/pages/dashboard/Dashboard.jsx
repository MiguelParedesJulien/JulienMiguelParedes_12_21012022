import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
// import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router";
// import { path } from "../../utils/path";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
// import UserMapper from "../../mapper/userMapper";
// import ActivityMapper from "../../mapper/activityMapper";
// import AverageSessionsMapper from "../../mapper/averageSessionsMapper";
import AverageSessions from "../../components/averageSessions/AverageSessions";
import GraphicPerformance from "../../components/graphicPerformance/GraphicPerformance";
import Score from "../../components/score/Score";
// import PerformanceMapper from "../../mapper/performanceMapper";
import DailyActivity from "../../components/dailyActivity/DailyActivity";
import { getUserInfo } from "../../utils/hooks/getUserInfo";
import { getActivity } from "../../utils/hooks/getActivity";
import { getPerformance } from "../../utils/hooks/getPerformance";
import { getAverageSession } from "../../utils/hooks/getAverageSessions";
import "./dashboard.css";

function Dashboard() {
  const idUrl = useParams();
  console.log(idUrl);

  const data = getUserInfo(idUrl.userId);
  console.log(data);

  const firstName = data.data.firstName;
  const keyData = data.data.keyData;

  console.log(firstName);

  const activity = getActivity(idUrl.userId);
  console.log(activity);

  const averageSessions = getAverageSession(idUrl.userId);
  console.log(averageSessions);

  const performance = getPerformance(idUrl.userId);
  console.log(performance);

  return (
    <>
      <Header />
      <main>
        <LeftSide />
        <div className="dashboard">
          {firstName && <HelloUser prenom={firstName} />}
          <section className="graph-section">
            <div className="graph">
              <article className="graph-bar-activity">
                <DailyActivity activite={activity.data} />
              </article>
              <div className="min-graph-card">
                <article className="duree-moy">
                  <AverageSessions average={averageSessions.data} />
                </article>
                <article className="graphic">
                  <GraphicPerformance perf={performance.data} />
                </article>
                <article className="score">
                  <Score score={data.data.score} />
                </article>
              </div>
            </div>
            <article className="sante">
              <HealthCard calorie={keyData} />
              <HealthCard prot={keyData} />
              <HealthCard glucide={keyData} />
              <HealthCard lipide={keyData} />
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
