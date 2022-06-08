export default function Contactus() {
  return (
    <>
      <div className="mt-2">
        <form>
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg   block w-full p-2.5  dark:text-white  "
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg   block w-full p-2.5  dark:text-white "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              className="bg-transparent border border-[#d8aaf8] text-white text-sm rounded-lg block w-full p-2.5  dark:text-white "
              required
            />
          </div>

          <button
            type="submit"
            className="text-[#d8aaf8] bg-transparent border  border-[#d8aaf8]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
