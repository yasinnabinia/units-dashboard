import UnitTable from "@/components/UnitTable";
import AddUnitForm from "@/components/AddUnitForm";

export default function UnitsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Units Dashboard</h1>
      <AddUnitForm />
      <UnitTable />
    </div>
  );
}