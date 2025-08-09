import { Schema, model } from "mongoose";
import { IAnnouncement } from "@/types/announcementTypes";

const announcementSchema = new Schema<IAnnouncement>({
  title: { 
    type: String, 
  },
  message: { 
    type: String, 
    required: true 
  },
  courseId: { 
    type: Schema.Types.ObjectId, 
    ref: "Course" 
  },
  createdBy: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
},
{
  timestamps: true
}
);

const Announcement = model<IAnnouncement>("Announcement", announcementSchema);

export default Announcement;
