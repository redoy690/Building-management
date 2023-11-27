import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageMember = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const members = users.filter(item => (item.role == "member"))


    const handleremovemember = (member) => {
        const userrole = {
            role: "user"
        }
        Swal.fire({
            title: "Are you sure?",
            text: `Remove ${member.name} from member list`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then((result) => {
            if (result.isConfirmed) {

                // fetch(`http://localhost:5000/users/${member._id}`, {
                //     method: 'PUT',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(userrole)

                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //         if (data.modifiedCount > 0) {
                //             Swal.fire({
                //                 title: "Success!",
                //                 text: `${member.name} removed from member list`,
                //                 icon: "success"
                //             });
                //             refetch()
                //         }
                //     })



                axiosSecure.put(`/users/${member._id}`,userrole)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: `${member.name} removed from member list`,
                                icon: "success"
                            });
                        }
                    })



            }
        });
    }
    return (
        <div>
            <div>
                <h2>Total Members {members.length}</h2>

            </div>
            <div>
                <div className="overflow-x-auto w-[280px] md:w-full">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl font-extrabold">
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            members.map((member, index) => <tbody key={member._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td><button onClick={() => handleremovemember(member)}>Remove </button></td>
                                </tr>
                            </tbody>)
                        }


                    </table>
                </div>


            </div>
        </div>
    );
};

export default ManageMember;