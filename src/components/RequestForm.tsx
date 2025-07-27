import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

interface RequestItem {
  no: number;
  qty: string;
  items: string;
  serialNumber: string;
  used: string;
  return: string;
}

const RequestForm = () => {
  const [formData, setFormData] = useState({
    jobSheetNo: "",
    doNo: "",
    name: "",
    date: "",
    cases: "",
    location: "",
    sparePartChecked: false,
    stockChecked: false,
    returnDate: "",
    takenBy: "",
    approveBy: "",
    returnCheckingBy: "",
    prepareBy: ""
  });

  const [items, setItems] = useState<RequestItem[]>(
    Array.from({ length: 15 }, (_, i) => ({
      no: i + 1,
      qty: "",
      items: "",
      serialNumber: "",
      used: "",
      return: ""
    }))
  );

  const updateItem = (index: number, field: keyof RequestItem, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-5xl mx-auto p-0 border-2 border-primary/20">
        {/* Header */}
        <div className="text-center py-4 border-b-2 border-primary/20">
          <h1 className="text-2xl font-bold text-primary">REQUEST FORM</h1>
          <p className="text-sm text-muted-foreground mt-1">SPARE PART / STOCK</p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Top Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[100px] border border-form-border p-2 bg-table-header">
                  Job sheet No.
                </label>
                <Input
                  value={formData.jobSheetNo}
                  onChange={(e) => updateFormData("jobSheetNo", e.target.value)}
                  className="border-form-border"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[100px] border border-form-border p-2 bg-table-header">
                  NAME:
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className="border-form-border"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[100px] border border-form-border p-2 bg-table-header">
                  Cases:
                </label>
                <Input
                  value={formData.cases}
                  onChange={(e) => updateFormData("cases", e.target.value)}
                  className="border-form-border"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[80px] border border-form-border p-2 bg-table-header">
                  D/O No:
                </label>
                <Input
                  value={formData.doNo}
                  onChange={(e) => updateFormData("doNo", e.target.value)}
                  className="border-form-border"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[80px] border border-form-border p-2 bg-table-header">
                  Date:
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData("date", e.target.value)}
                  className="border-form-border"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium min-w-[80px] border border-form-border p-2 bg-table-header">
                  Location:
                </label>
                <Input
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                  className="border-form-border"
                />
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex gap-8 mb-6 justify-center">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="spare-part"
                checked={formData.sparePartChecked}
                onCheckedChange={(checked) => updateFormData("sparePartChecked", checked as boolean)}
              />
              <label htmlFor="spare-part" className="text-sm font-medium">
                SPARE PART
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stock"
                checked={formData.stockChecked}
                onCheckedChange={(checked) => updateFormData("stockChecked", checked as boolean)}
              />
              <label htmlFor="stock" className="text-sm font-medium">
                STOCK
              </label>
            </div>
          </div>

          {/* Items Table */}
          <div className="border-2 border-form-border mb-6">
            {/* Table Header */}
            <div className="grid grid-cols-6 bg-table-header border-b border-form-border">
              <div className="p-2 border-r border-form-border text-center font-medium text-sm">NO.</div>
              <div className="p-2 border-r border-form-border text-center font-medium text-sm">QTY</div>
              <div className="p-2 border-r border-form-border text-center font-medium text-sm">ITEMS</div>
              <div className="p-2 border-r border-form-border text-center font-medium text-sm">Serial Number</div>
              <div className="p-2 border-r border-form-border text-center font-medium text-sm">USED</div>
              <div className="p-2 text-center font-medium text-sm">RETURN</div>
            </div>

            {/* Table Rows */}
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-6 border-b border-form-border">
                <div className="p-2 border-r border-form-border text-center text-sm">{item.no}</div>
                <div className="p-1 border-r border-form-border">
                  <Input
                    value={item.qty}
                    onChange={(e) => updateItem(index, "qty", e.target.value)}
                    className="border-0 text-center text-sm h-8"
                  />
                </div>
                <div className="p-1 border-r border-form-border">
                  <Input
                    value={item.items}
                    onChange={(e) => updateItem(index, "items", e.target.value)}
                    className="border-0 text-sm h-8"
                  />
                </div>
                <div className="p-1 border-r border-form-border">
                  <Input
                    value={item.serialNumber}
                    onChange={(e) => updateItem(index, "serialNumber", e.target.value)}
                    className="border-0 text-sm h-8"
                  />
                </div>
                <div className="p-1 border-r border-form-border">
                  <Input
                    value={item.used}
                    onChange={(e) => updateItem(index, "used", e.target.value)}
                    className="border-0 text-sm h-8"
                  />
                </div>
                <div className="p-1">
                  <Input
                    value={item.return}
                    onChange={(e) => updateItem(index, "return", e.target.value)}
                    className="border-0 text-sm h-8"
                  />
                </div>
              </div>
            ))}

            {/* Return Date Row */}
            <div className="grid grid-cols-6 bg-table-header">
              <div className="p-2 border-r border-form-border font-medium text-sm">Return Date</div>
              <div className="p-1 col-span-5">
                <Input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => updateFormData("returnDate", e.target.value)}
                  className="border-0 text-sm h-8"
                />
              </div>
            </div>
          </div>

          {/* Signature Section */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="space-y-8">
              <div>
                <div className="border-b border-primary mb-2 pb-1">
                  <Input
                    value={formData.takenBy}
                    onChange={(e) => updateFormData("takenBy", e.target.value)}
                    placeholder=""
                    className="border-0 text-sm p-0 h-6"
                  />
                </div>
                <p className="text-sm">Taken By</p>
              </div>
              <div>
                <div className="border-b border-primary mb-2 pb-1">
                  <Input
                    value={formData.approveBy}
                    onChange={(e) => updateFormData("approveBy", e.target.value)}
                    placeholder=""
                    className="border-0 text-sm p-0 h-6"
                  />
                </div>
                <p className="text-sm">Approve By</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="border-b border-primary mb-2 pb-1">
                  <Input
                    value={formData.returnCheckingBy}
                    onChange={(e) => updateFormData("returnCheckingBy", e.target.value)}
                    placeholder=""
                    className="border-0 text-sm p-0 h-6"
                  />
                </div>
                <p className="text-sm">Return Checking By</p>
              </div>
              <div>
                <div className="border-b border-primary mb-2 pb-1">
                  <Input
                    value={formData.prepareBy}
                    onChange={(e) => updateFormData("prepareBy", e.target.value)}
                    placeholder=""
                    className="border-0 text-sm p-0 h-6"
                  />
                </div>
                <p className="text-sm">Prepare By</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RequestForm;