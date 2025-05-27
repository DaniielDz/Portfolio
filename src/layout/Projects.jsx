import ProjectsContainer from "../components/ProjectsContainer";
import SectionTitle from "../components/SectionTitle";
import styles from "../styles/Projects.module.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbBrandFiverr } from "react-icons/tb";
import compIntCalc from "../assets/projects/CompundInterestCalculator.png";
import mortgageCalc from "../assets/projects/MortgageCalculator.png";
import craftediaImg from "../assets/projects/craftedia.png";
import rentCalcImg from "../assets/projects/RentCalculator.png";
import solarEffortCalcImg from "../assets/projects/SolarEffortCalculator.png";
import equitySolarImg from "../assets/projects/EquitySolar.png";
import ibradnzCalcImg from "../assets/projects/IbradnzCalculator.png";
import costCalcImg from "../assets/projects/BPCostCalculator.png";
import timeConverterImg from "../assets/projects/TimeZoneConverter.png";
import homeCostHubImg from "../assets/projects/HomeCostHub.png";
import { motion } from "framer-motion";


function Projects() {
  const fiverrProjects = [
    {
      title: "Craftedia",
      subtitle:
        "Web desarrollada con React y CSS Modules para mostrar paquetes de recursos de Minecraft. Incluye backend con Express y MySQL, junto a un panel de administración seguro para crear, editar y eliminar publicaciones.",
      imageUrl: craftediaImg,
      demoUrl: "https://craftedia.netlify.app/",
    },
    {
      title: "Calculadora de Alquiler",
      subtitle:
        "Aplicación web que se conecta a una hoja de cálculo de Google Sheets con fórmulas personalizadas. Los usuarios ingresan los datos en la web, se calculan automáticamente en la hoja y se muestra el resultado final, con opción de descarga en PDF.",
      imageUrl: rentCalcImg,
      demoUrl: "https://rent-calculator-test.netlify.app/",
    },
    {
      title: "Equity Solar | Solar Effort Calculator",
      subtitle:
        "Calculadora web desarrollada a partir de un Excel con fórmulas y un diseño en Adobe XD proporcionados por el cliente. Es completamente responsive y realiza con precisión los cálculos necesarios para planificar esfuerzos en ventas solares.",
      imageUrl: solarEffortCalcImg,
      demoUrl: "https://eq-solar-effort-calculator.netlify.app/",
    },
    {
      title: "Equity Solar | System & Adders Calculator",
      subtitle:
        "Aplicación web con dos calculadoras: una para estimar el precio del sistema solar y otra para calcular costos adicionales. Basada en lógica personalizada del cliente y con opción de descargar los resultados en PDF.",
      imageUrl: equitySolarImg,
      demoUrl: "https://equity-solar.netlify.app/",
    },
    {
      title: "Calculadora de Macronutrientes",
      subtitle:
        "Calculadora web para estimar necesidades calóricas y distribución de macronutrientes según datos personales y nivel de actividad física. Basada en un Excel con fórmulas y un diseño proporcionados por el cliente.",
      imageUrl: ibradnzCalcImg,
      demoUrl: "https://ibradnz-calculator-test.netlify.app/",
    },
    {
      title: "Employee Burnout Cost Calculator",
      subtitle:
        "Calculadora web para estimar el costo financiero del burnout, ausentismo y rotación de empleados. Permite ingresar datos clave y muestra el costo anual estimado y el ahorro potencial con programas de bienestar. Incluye descarga de resultados en PDF.",
      imageUrl: costCalcImg,
      demoUrl: "https://cost-calculator-demo1.netlify.app/",
      codeUrl: "https://github.com/DaniielDz/Employee-Burnout-Cost-Calculator",
    },
    {
      title: "Time Zone Converter",
      subtitle:
        "Aplicación web que permite comparar horarios actuales en distintas zonas horarias del mundo. Muestra fecha, hora, segundos, abreviaturas (KST, AST, etc.) y desplazamientos UTC, y ofrece controles para ajustar minutos, horas o días de forma interactiva.",
      imageUrl: timeConverterImg,
      demoUrl: "https://time-converter-test.netlify.app/",
    },
    {
      title: "Calculadora de Interés Compuesto",
      subtitle:
        "Aplicación web para calcular el crecimiento de una inversión mediante interés compuesto. Desarrollada con React y Tailwind CSS, ofrece una interfaz intuitiva y responsiva.",
      imageUrl: compIntCalc,
      demoUrl: "https://compouned-interest-calculator.netlify.app/",
      codeUrl: "https://github.com/DaniielDz/Compound-Interest-Calculator",
    },
    {
      title: "Calculadora de Hipoteca",
      subtitle:
        "Herramienta web para estimar pagos mensuales de hipotecas. Construida con React y Tailwind CSS, ofrece cálculos detallados y visualizaciones interactivas de la amortización.",
      imageUrl: mortgageCalc,
      demoUrl: "https://mortgage-calculator-test.netlify.app/",
      codeUrl: "https://github.com/DaniielDz/Mortgage-Calculator",
    },
  ];

  const personalProjects = [
    {
      title: "HomeCostHub",
      subtitle:
        "Web desarrollada con Next.js y Tailwind CSS, con backend en PostgreSQL. Ofrece +1.000 calculadoras para estimar costos de remodelaciones, reparaciones e instalaciones en función del código postal. Proporciona precios actualizados para materiales, mano de obra y plazos de proyecto, e incluye una mortgage calculator.",
      imageUrl: homeCostHubImg,
      demoUrl: "https://homecosthub.com/",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle title={"Portafolios"} />
      <ProjectsContainer
        icon={<TbBrandFiverr className={styles.icon} />}
        title={"Trabajos en Fiverr"}
        styles={styles}
        projects={fiverrProjects}
      />
      <ProjectsContainer
        icon={<LiaLaptopCodeSolid className={styles.icon} />}
        title={"Proyectos Personales"}
        styles={styles}
        projects={personalProjects}
      />
    </motion.section>
  );
}

export default Projects;
