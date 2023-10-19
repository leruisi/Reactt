
import { useEffect, useState } from "react";
import { Launch } from "../Launch/Launch";
import { launchesService } from "../../service/LaunchesService";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAll()
            .then(response => {
                const filtered = response.data.filter(item => item.launch_year !== '2020');
                setLaunches(filtered);
            })
            .catch(error => {
                console.error("Произошла ошибка при загрузке данных:", error);
            });
    }, []);

    return (
        <div>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch} />)}
        </div>
    );
};

export { Launches }
