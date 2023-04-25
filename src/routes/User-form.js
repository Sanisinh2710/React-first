import { useState, useEffect } from "react"

const Userfrom = () => {

    const values = { fname: "", lname: "", dob: "", email: "", contact: "", gender: "", addr: "", hobbies: [], achievement: [{ title: "", date: "" }] }
    const [foValues, setfoValues] = useState(values)
    const [foerror, setfoerror] = useState({})
    const [isSubmit, setisSubmit] = useState(false)
    const [selectedValues, setSelectedValues] = useState([]);

    console.log(foValues);
    const getvalues = (e) => {
        const { name, value } = e.target;
        setfoValues({ ...foValues, [name]: value })


    }

    const getcheckbox = (e) => {
        const { value } = e.target;

        const checked = e.target.checked;

        if (checked) {

            setSelectedValues([...selectedValues, value])
        }
    }

    let achivementValue = (i, e) => {
        const { name, value } = e.target;
        console.log(name, value);
        let newvalue = foValues.achievement;

        newvalue[i][name] = value


        setfoValues({ ...foValues, achievement: newvalue })
    }

    const addrow = () => {
        const new1 = foValues.achievement;

        const newachievement = { title: "", date: "" }

        new1.push(newachievement);
        setfoValues({ ...foValues, achievement: new1 })
    }
    let remove = (i) => {
        let newFormValues = foValues.achievement;
        newFormValues.splice(i, 1);
        setfoValues({ ...foValues, achievement: newFormValues })
    }

    const submit = (e) => {
        e.preventDefault();
        setfoerror(validation(foValues))
        setisSubmit(true)

    }

    useEffect(() => {
        setfoValues({ ...foValues, hobbies: selectedValues })
        //eslint-disable-next-line
    }, [selectedValues])

    useEffect(() => {
        if (Object.keys(foerror).length === 0 && isSubmit) {
        }
        //eslint-disable-next-line
    }, [foerror])


    const validation = (values) => {
        const errors = {};
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
        }


        if (values.hobbies.length === 0) {
            errors.hobbies = "Please select  atleast one hobby";
        }

        if (values.gender.length === 0) {
            errors.gender = "select your gender";
        }


        if (!values.contact) {
            errors.contact = "Please enter your valid Mobile number";
        }
        if (!values.addr) {
            errors.addr = "Please enter your address";
        }

        foValues.achievement.forEach(a => {

            if (a.title === "" && a.date === "") {
                errors.achievement = "Please enter your achievments";
            }
            a++
        });

        return errors;

    }




    return (<>
        <div className="body">
            <div className="card">
                <h2>Form</h2>
                <br /><br />
                <form onSubmit={submit}>
                    <table>
                        <tbody>

                            <tr>
                                <td>First Name: <input type="text" name="fname" placeholder="Your Name..." value={foValues.fname} onChange={getvalues} /></td>
                                <td><p>{foerror.fname}</p></td>
                            </tr>
                            <tr>
                                <td>Last Name: <input type="text" name="lname" placeholder="Your Sirname..." value={foValues.lname} onChange={getvalues} /></td>
                                <td><p>{foerror.lname}</p></td>
                            </tr>
                            <tr>
                                <td>Date of birth: <input type="date" name="dob" min={'1980-01-01'} max={'2020-01-01'} value={foValues.dob} onChange={getvalues} /> </td>
                                <td><p>{foerror.dob}</p></td>

                            </tr>
                            <tr>
                                <td>E-mail: <input type="email" name="email" placeholder="Email id..." value={foValues.email} onChange={getvalues} /></td>
                                <td><p>{foerror.email}</p></td>

                            </tr>
                            <tr>
                                <td>Phone Number: <input type="text" name="contact" maxLength={10} value={foValues.contact} onChange={getvalues} /></td>
                                <td><p>{foerror.contact}</p></td>

                            </tr>
                            <tr>
                                <td>Gender:
                                    <input type="radio" name="gender" value="male" onChange={getvalues} /> Male
                                    <input type="radio" name="gender" value="female" onChange={getvalues} /> Female
                                    <input type="radio" name="gender" value="other" onChange={getvalues} /> other
                                </td>
                                <td><p>{foerror.gender}</p></td>

                            </tr>
                            <tr>
                                <td>Address1: <textarea rows="2" cols="30" name="addr" value={foValues.addr} onChange={getvalues}  ></textarea></td>
                                <td><p>{foerror.addr}</p></td>

                            </tr>
                            <tr>
                                <td>
                                    <label>hobbies: </label> &nbsp;
                                    <label>Sports</label><input type="checkbox" name="hobbies" value={'Sports'} onClick={getcheckbox} />&nbsp;
                                    <label>Music</label><input type="checkbox" name="hobbies" value={'Music'} onClick={getcheckbox} />&nbsp;
                                    <label>Reading</label><input type="checkbox" name="hobbies" value={'Reading'} onClick={getcheckbox} />
                                </td>
                                <td><p>{foerror.hobbies}</p></td>
                            </tr>
                            <tr><td><label>Achievement:</label></td></tr>
                            {
                                foValues.achievement.map((a, i) =>

                                    <tr key={i}>

                                        <td >
                                            <input type="text" name="title" value={a.title} onChange={e => achivementValue(i, e)} />
                                            <input type="date" name="date" value={a.date} onChange={e => achivementValue(i, e)} />
                                            {
                                                i ?
                                                    <button type="button" onClick={() => remove(i)}>Remove</button>
                                                    : null
                                            }
                                        </td>

                                    </tr>
                                )
                            }
                            <tr>
                                    <td> <input type="button" value={"Add Achievement"} onClick={addrow} /></td>
                                <td>
                                    {
                                        foerror.achievement ? <p>{foerror.achievement}</p> : null
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    </>
    )

}





export default Userfrom;
