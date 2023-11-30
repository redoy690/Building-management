import { useState } from "react";
import usePendingApartment from "../../../hooks/usePendingApartment";
import AggrementRequestCard from "./AggrementRequestCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const AggrementRequest = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [pendingapartment,refetch] = usePendingApartment()

    const pendingitem = pendingapartment.filter(item => item.status == 'pending')
    const checkeditem = pendingapartment.filter(item => item.status == 'checked')
    const rejecteditem = pendingapartment.filter(item => item.status == 'rejected')
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">ALL AGREEMENT REQUEST</h2>
            {/* <div role="tablist" className="tabs tabs-bordered w-1/3 mx-auto">
                <a role="tab" className="tab">PENDING</a>
                <a role="tab" className="tab tab-active">CHECKED</a>
                <a role="tab" className="tab">REJECTED</a>
            </div> */}

            <div className="mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>PENDING</Tab>
                        <Tab>CHECKED</Tab>
                        <Tab>REJECTED</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {
                                pendingitem.map(item => <AggrementRequestCard key={item._id} item={item} refetch={refetch} ></AggrementRequestCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {
                                checkeditem.map(item => <AggrementRequestCard key={item._id} item={item} refetch={refetch}></AggrementRequestCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {
                                rejecteditem.map(item => <AggrementRequestCard key={item._id} item={item} refetch={refetch}></AggrementRequestCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {
                    pendingapartment.map(pendingapartment => <AggrementRequestCard key={pendingapartment._id} pendingapartment={pendingapartment}></AggrementRequestCard>)
                }
            </div> */}
        </div>
    );
};

export default AggrementRequest;