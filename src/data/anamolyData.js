const anomalies = [
    {
        windowTime:{
            date:"12/23/2020",
            startTime:"02.03.7",
            endTime:"02.04.0"
        },
        pmu_id:"PMU_01",
        anomalies_detected:{
            Va:true,
            Vm:false,
            Ca:true,
            Cm:false,
            F:false,
            Ro:false},
        bus_id:"BUS_01",
        confidence_level:32.37111871,
        detector:1
    },
    {
        windowTime:{
            date:"12/23/2020",
            startTime:"02.04.3",
            endTime:"02.05.2"
        },
        pmu_id:"PMU_02",
        anomalies_detected:"Va Vm Ca Cm F Ro",
        bus_id:"BUS_02",
        confidence_level:32.37111871,
        detector:2
    },
    {
        windowTime:{
            date:"12/23/2020",
            startTime:"02.05.7",
            endTime:"02.06.1"
        },
        pmu_id:"PMU_03",
        anomalies_detected:"Va Vm Ca Cm F Ro",
        bus_id:"BUS_03",
        confidence_level:32.37111871,
        detector:1
    },
    {
        windowTime:{
            date:"12/23/2020",
            startTime:"02.05.7",
            endTime:"02.06.1"
        },
        pmu_id:"PMU_04",
        anomalies_detected:"Va Vm Ca Cm F Ro",
        bus_id:"BUS_04",
        confidence_level:32.37111871,
        detector:1
    },
    {
        windowTime:{
            date:"12/23/2020",
            startTime:"02.05.7",
            endTime:"02.06.1"
        },
        pmu_id:"PMU_05",
        anomalies_detected:"Va Vm Ca Cm F Ro",
        bus_id:"BUS_05",
        confidence_level:32.37111871,
        detector:1
    }
]

export default anomalies