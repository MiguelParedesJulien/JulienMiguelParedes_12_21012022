import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router";
import { path } from "../../utils/path";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
import UserMapper from "../../mapper/userMapper";
import "./dashboard.css";

function Dashboard() {
  const idUrl = useParams();
  const data = useFetch(`${path}${idUrl.userId}`, UserMapper);
  const firstName = data.data.firstName;
  const keyData = data.data.keyData;
    return (
        <>
          <Header />
            <main>
              <LeftSide />
              <div className="dashboard">
                <HelloUser prenom={firstName} />
                  <section>
                    <div className="graph">
                      <article className="activite-quot"></article>
                      <article className="duree-moy"></article>
                      <article className="radar"></article>
                      <article className="score"></article>
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