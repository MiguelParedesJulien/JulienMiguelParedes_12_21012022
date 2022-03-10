import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useParams } from "react-router";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
import AverageSessions from "../../components/averageSessions/AverageSessions";
import GraphicPerformance from "../../components/graphicPerformance/GraphicPerformance";
import Score from "../../components/score/Score";
import DailyActivity from "../../components/dailyActivity/DailyActivity";
import { getUserInfo } from "../../utils/hooks/getUserInfo";
import { getActivity } from "../../utils/hooks/getActivity";
import { getPerformance } from "../../utils/hooks/getPerformance";
import { getAverageSession } from "../../utils/hooks/getAverageSessions";
import Error from "../error/Error";
import "./dashboard.css";

/**
 * React component displaying the dashboard page
 * @returns {ReactElement}
 */
function Dashboard() {
  const idUrl = useParams();
  const data = getUserInfo(idUrl.userId);
  const firstName = data.data.firstName;
  const keyData = data.data.keyData;
  const activity = getActivity(idUrl.userId);
  const averageSessions = getAverageSession(idUrl.userId);
  const performance = getPerformance(idUrl.userId);

  if (data.error || activity.error || averageSessions.error || performance.error) {
    return <Error />;
  } else {
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
}

export default Dashboard;
