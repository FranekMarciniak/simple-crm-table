type TechnicianStatus = "Assigned" | "In progress" | "Confirmed" | "Completed";

interface ITechnician {
  person_name: string;
  status: TechnicianStatus;
}

export interface IOrder {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: ITechnician[];
  status: "New" | "Confirmed" | "Canceled";
  priority: "Low" | "Normal" | "High";
}
