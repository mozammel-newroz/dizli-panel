import Header from "@/components/Header";

import Pagination from "rc-pagination/lib/Pagination";
import "../assets/pagination.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-h-[100vh] ">
      <Header
        title="Home Page"
        parent="Home"
        parent_url="/home"
        child="Table"
      />
      <div className="table-wrp block scrollbar-hide overflow-auto ">
        <div className="">
          <table className="table-fixed w-full">
            <thead className="sticky top-0 bg-white">
              <tr className="text-left">
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody className="overflow-auto h-96">
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td> last Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-2 sticky bottom-0 flex items-center justify-between border-t bg-white px-4 h-[50px]">
          <div>
            <p>Showing 10 of 120</p>
          </div>
          <div className="">
            <Pagination
              total={120}
              pageSize={10}
              // onChange={handlePageChange}
              nextIcon=<svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              prevIcon=<svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            />
          </div>
        </div>
      </div>
    </div>
  );
}
