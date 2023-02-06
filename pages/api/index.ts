import { NextApiHandler } from "next";
import NextCors from 'nextjs-cors';

import {

    distanceFromTime,

    lightYearsFromMeters,

    speedFromTime,

    yearsToUniverseEnd,

} from "../../utils/math";


const handler: NextApiHandler = async (req, res) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    const ninthofmaytentythirteen = new Date("2013-04-09").getTime();

    const now = Date.now();

    const time = (now - ninthofmaytentythirteen) / 1000;


    const distance = distanceFromTime(time);

    const speed = speedFromTime(time);

    const yearsLeft = yearsToUniverseEnd(time);

    const lightYearsTravelled = lightYearsFromMeters(distance);


    res.status(200).json({

        distance: { value: lightYearsTravelled, unit: "light years" },

        speed: { value: speed, unit: "m/s" },

        remaining: { value: yearsLeft, unit: "years" },

    });

};


export default handler;

