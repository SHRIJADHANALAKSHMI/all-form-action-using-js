let form=document.getElementById("userForm");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let table=document.getElementById("datatable");
    function tableData(name,college,age,email,password,course,comment){
        let row=table.insertRow();
        let nameCell=row.insertCell(0);
        let collegeCell=row.insertCell(1);
        let ageCell=row.insertCell(2);
        let emailCell=row.insertCell(3);
        let passwordCell=row.insertCell(4);
        let courseCell=row.insertCell(5);
        let commentCell=row.insertCell(6);
        nameCell.innerHTML=name;
        collegeCell.innerHTML=college;
        ageCell.innerHTML=age;
        emailCell.innerHTML=email;
        passwordCell.innerHTML=password;
        courseCell.innerHTML=course;
        commentCell.innerHTML=comment;
    }
    let name=document.getElementById("name").value;
    let college=document.getElementById("college").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let course=document.getElementById("cars").value;
    let comment=document.getElementById("comment").value;

    tableData(name,college,age,email,password,course,comment);
    form.reset();
});
