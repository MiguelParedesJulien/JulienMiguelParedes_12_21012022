import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router";
import { path } from "../../utils/path";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
import UserMapper from "../../mapper/userMapper";
import ActivityMapper from "../../mapper/activityMapper";
import AverageSessionsMapper from "../../mapper/averageSessionsMapper";
import AverageSessions from "../../components/averageSessions/AverageSessions";
import GraphicPerformance from "../../components/graphicPerformance/GraphicPerformance";
import PerformanceMapper from "../../mapper/performanceMapper";
import DailyActivity from "../../components/dailyActivity/DailyActivity";
import "./dashboard.css";

function Dashboard() {
  const idUrl = useParams();
  const data = useFetch(`${path}${idUrl.userId}`, UserMapper);
  const firstName = data.data.firstName;
  const keyData = data.data.keyData;
  const activity = useFetch(`${path}${idUrl.userId}/activity`, ActivityMapper);
  console.log(activity);

  const averageSessions = useFetch(`${path}${idUrl.userId}/average-sessions`, AverageSessionsMapper);
  console.log(averageSessions);

  const performance = useFetch(`${path}${idUrl.userId}/performance`, PerformanceMapper);
  console.log(performance);
  return (
    <>
      <Header />
      <main>
        <LeftSide />
        <div className="dashboard">
          <HelloUser prenom={firstName} />
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
