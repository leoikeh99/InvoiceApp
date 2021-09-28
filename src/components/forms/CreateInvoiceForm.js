import React from "react";

const CreateInvoiceForm = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-black opacity-30"></div>
      <div className="fixed top-0 left-0 z-30 w-form1 h-screen bg-bg2 rounded-tr-20 rounded-br-20 pl-bar pt-12 pb-24">
        <div className="max-w-container2 m-auto h-full">
          <h2 className="text-text1 font-bold text-lg2 mb-12">New Invoice</h2>
          <form className="h-full overflow-y-auto pr-3" action="">
            <div className="mb-12">
              <p className="text-purple font-bold text-xs mb-6">Bill From</p>
              <label className="label">Street Adress</label>
              <input className="input" type="text" />
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="label">City</label>
                  <input className="input" type="text" name="city" />
                </div>
                <div>
                  <label className="label">Post Code</label>
                  <input className="input" type="text" name="post-code" />
                </div>
                <div>
                  <label className="label">Country</label>
                  <input className="input" type="text" name="country" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-purple font-bold text-xs mb-6">Bill To</p>
              <label className="label">Client Name</label>
              <input className="input" type="text" />
              <label className="label">Client Mail</label>
              <input
                className="input placeholder-text1"
                type="text"
                placeholder="e.g. email@example.com"
              />
              <label className="label">Street Adress</label>
              <input className="input" type="text" />
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="label">City</label>
                  <input className="input" type="text" name="city" />
                </div>
                <div>
                  <label className="label">Post Code</label>
                  <input className="input" type="text" name="post-code" />
                </div>
                <div>
                  <label className="label">Country</label>
                  <input className="input" type="text" name="country" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceForm;
