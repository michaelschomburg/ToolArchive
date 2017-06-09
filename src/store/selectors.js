


export function toolsWithProjects(state){
  const toolsWithProjects = state.tools.map(tool => {
      if(tool.projects){
        const projects = state.projects.filter(project => tool.projects.includes(project.title));
        return {
          ...tool,
          projects
        }
      } else {
        return {
          ...tool,
          projects: []
        };
      }
  });
  return {
    tools: toolsWithProjects
  }
}


export function projectsWithTools(state){
    const projectsWithTools = state.projects.map(project => {
        if(project.repos){
          const tools = state.tools.filter(tool => project.repos.includes(tool.name));
          return {
            ...project,
            tools
          }
        } else {
          return {
            ...project,
            tools: []
          }
        }
    });
    return projectsWithTools;
}
