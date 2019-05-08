import {Injectable} from '@angular/core';

@Injectable()
export class PatientService{

    get(){
        return this.patientItems;
    }

    add(patientItem){
        this.patientItems.push(patientItem);
    }

    delete(patientItem){
        let index = this.patientItems.indexOf(patientItem);
        if(index >=0){
            this.patientItems.splice(index,1);
        }
    }

    patientItems=[
        {
        p_id:1,
        p_name:"kakashi hatake",
        p_dob:"21/12/1991",
        p_bloodGroup:"O+",
        p_sex:"m"

        },{
        p_id:2,
        p_name:"naruto uzumaki",
        p_dob:"1/11/1995",
        p_bloodGroup:"A+",
        p_sex:"m"

        },{
        p_id:3,
        p_name:"sasuke uchiha",
        p_dob:"13/07/1997",
        p_bloodGroup:"B-",
        p_sex:"m"

        }
        ]


}

interface PatientItem{
    p_id:number;
    p_name:string;
    p_dob:string;
    p_bloodGroup:string;
    p_sex:string;
}

interface PatientItems{
    patientItems: PatientItem[];
}