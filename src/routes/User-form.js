import { computeHeadingLevel } from "@testing-library/react"
import { useState, useEffect } from "react"

const Userfrom = () => {

    const values = { fname: "", lname: "", dob: "", email: "", contact: "", gender: "", addr: "", hobbies: "", achievement: "", achivdate: "" }
    const [foValues, setfoValues] = useState(values)
    const [foerror, setfoerror] = useState({})
    const [isSubmit, setisSubmit] = useState(false)

    const getvalues = (e) => {
        const { name, value } = e.target;
        setfoValues({ ...foValues, [name]: value })
        console.log(foValues);

    }

    const submit = (e) => {
        e.preventDefault();
        setfoerror(validation(foValues))
        setisSubmit(true)
    }

    useEffect(() => {
        console.log(foerror)
        if (Object.keys(foerror).length === 0 && isSubmit) {
            console.log(foValues)
        }
    }, [foerror])

    const validation = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; 
        if (!values.fname) {
            errors.fname = "Please enter First name";
        }
        if (!values.lname) {
            errors.lname = "Please enter Last name";
        }
        if (!values.dob) {
            errors.dob = "Please enter Your birthdate ";
        }
        if (!values.email) {
            errors.email = "Please enter valid email";
        }else if(!regex.test(values.email)){
            errors.email = "This email is not valid";
        }

        if (!values.contact) {
            errors.contact = "Please enter your valid Mobile number";
        }
        if (!values.addr) {
            errors.addr = "Please enter your address";
        }
        if (!values.achievement) {
            errors.achievement = "Please enter your achievment here";
        }
        if (!values.achivdate) {
            errors.achivdate = "Please enter your achievment date ";
        }
        return errors;

    }




    return (<>
        <div className="body">
            <div className="card">
                <h3>Form</h3>
                <br /><br />
                <form onSubmit={submit}>
                    <table>
                        <tr>
                            <td>First Name: <input type="text" name="fname" placeholder="Your Name..." value={foValues.fname} onChange={getvalues} /></td>
                            <td><p>{foerror.fname}</p></td>
                        </tr>
                        <tr>
                            <td>Last Name: <input type="text" name="lname" placeholder="Your Sirname..." value={foValues.lname} onChange={getvalues} /></td>
                            <td><p>{foerror.lname}</p></td>
                        </tr>
                        <tr>
                            <td>Date of birth: <input type="date" name="dob" min="1980-01-01" mix="2020-01-01" value={foValues.dob} onChange={getvalues} /> </td>
                            <td><p>{foerror.dob}</p></td>

                        </tr>
                        <tr>
                            <td>E-mail: <input type="email" name="email" placeholder="Email id..." value={foValues.email} onChange={getvalues} /></td>
                            <td><p>{foerror.email}</p></td>

                        </tr>
                        <tr>
                            <td>Phone Number: <input type="text" name="contact" maxlength="10" value={foValues.contact} onChange={getvalues} /></td>
                            <td><p>{foerror.contact}</p></td>

                        </tr>
                        <tr>
                            <td>Gender:
                                <input type="radio" name="gender" value="male" onChange={getvalues}/> Male
                                <input type="radio" name="gender" value="female" onChange={getvalues}/> Female
                                <input type="radio" name="gender" value="other" onChange={getvalues} /> other
                            </td>

                        </tr>
                        <tr>
                            <td>Address1: <textarea rows="2" cols="30" name="addr" value={foValues.addr} onChange={getvalues}  ></textarea></td>
                            <td><p>{foerror.addr}</p></td>

                        </tr>
                        <tr>
                            <td>
                                <label>hobbies</label>
                                <input type="checkbox" name="hobbies" value="sports" onChange={getvalues} />sports
                                <input type="checkbox" name="hobbies" value="Music" onChange={getvalues}/> Music
                                <input type="checkbox" name="hobbies" value="Reading" onChange={getvalues}/>Reading
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Achievement:</label>
                                <input type="text" name="achievement" value={foValues.achievement} onChange={getvalues} />
                                <input type="date" name="achivdate" value={foValues.achivdate} onChange={getvalues} />
                            </td>
                            <p>{foerror.achievement}</p>
                            <p>{foerror.achivdate}</p>

                        </tr>
                    </table>

                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    </>
    )

}





export default Userfrom;
