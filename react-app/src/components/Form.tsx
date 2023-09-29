import React, { useState } from "react";
import { useForm, FieldValues, reset } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["Groceries", "Utilities", "Entertainment"] as const;

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(0.01),
  category: z.enum([...categories]),
});

type FormData = z.infer<typeof schema>;

type Expense = {
  description: string;
  amount: number;
  category: string;
};

const Form = () => {
  const [expenses, setExpense] = useState<Expense[]>([]);
  const [expenseDisplay, setExpenseDisplay] = useState("All Categories");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    // Add the form data to expenses list
    setExpense((prevExpense) => [...prevExpense, data]);
    // Optional: Reset the form after submission
    reset();
  };

  const deleteRow = (index: number) => {
    setExpense((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="categories"
            className="form-select"
          >
            {categories.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <div className="mb-3">
          <button disabled={!isValid} className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="mb-3">
        <label>Select Category To Display</label>
        <select
          className="form-select"
          onChange={(e) => setExpenseDisplay(e.target.value)}
        >
          {["All Categories", ...categories].map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <table className="mb-3 table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses
              .filter(
                (expense) =>
                  expenseDisplay === "All Categories" ||
                  expense.category === expenseDisplay
              )
              .map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>{"$" + expense.amount.toFixed(2)}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRow(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
