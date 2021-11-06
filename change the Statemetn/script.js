//Incorrect Import Statement



function fixImport(s) {
	 const [a,b,c,d]=s.split(' ')
   return `${c} ${d} ${a} ${b}`
}

console.log(fixImport("import object from module_name"))

// ➞ "from module_name import object"
