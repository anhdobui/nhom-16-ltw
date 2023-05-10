function Login() {
	return (
		<div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
			<div className="relative py-3 sm:mx-auto sm:max-w-xl">
				<div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
				<div className="relative min-w-[425px] bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
					<div className="mx-auto max-w-md">
						<div>
							<h1 className="text-2xl font-semibold">Login </h1>
						</div>
						<div className="divide-y divide-gray-200">
							<div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
								<div className="relative">
									<input
										autoComplete="off"
										id="email"
										name="email"
										type="text"
										className="focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
										placeholder="Email address"
									/>
									<label
										htmlFor="email"
										className="peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
									>
										Email Address
									</label>
								</div>
								<div className="relative">
									<input
										autoComplete="off"
										id="password"
										name="password"
										type="password"
										className="focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
										placeholder="Password"
									/>
									<label
										htmlFor="password"
										className="peer-placeholder-shown:text-gray-440 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
									>
										Password
									</label>
								</div>
								<div className="relative">
									<button className="rounded-md bg-blue-500 px-2 py-1 text-white">Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
