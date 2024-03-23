import { PriceAndvolume } from "../Models/priceAndvolume.js";
import expressError from "../utils/expressError.js";
import{ApiResponse} from "../utils/apiResponse.js"
import { response } from "express";

let Create = async(req,res)=>{
   let data = req.body;
   console.log(data);
   if(!data){
    throw new expressError(400, "data not available")
   };
   let newPriceAndVolume = await PriceAndvolume.create(data);
   console.log(newPriceAndVolume);
   res.status(201).json(
    new ApiResponse(200, newPriceAndVolume, " price and volume added succesfully")
)
};

let show = async(req,res)=>{

    let data = await PriceAndvolume.find();

    // console.log(data);
    res.status(201).json(
        new ApiResponse(200, data, " price and volume send succesfully")
    )
}

let updatePriceAndVolume = async(req,res)=>{
     let data = req.body;
     let id = req.params.id;
     console.log(req.body);
     let findData = await PriceAndvolume.findByIdAndUpdate(id, data, { new: true });

    res.status(201).json(
        new ApiResponse(200,findData, "price and volume update succesfully")
    )
    
    }
const deleteController = async(req,res)=>{
    let id = req.params.id;
   console.log(id);
    let deleteData = await PriceAndvolume.deleteOne({_id: id});

    res.status(200).json(
        new ApiResponse(200,deleteData,"iteam delete succesfully")
    )
  
}
//edit show route
let EditShowController = async (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;
    const data = await PriceAndvolume.findById(req.params.id);
    res.status(201).json(
        new ApiResponse(200, data, " price and volume send succesfully")
    )
};
export {
    Create,
    updatePriceAndVolume,
    show,
    deleteController,
    EditShowController

}