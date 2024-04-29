export interface ISkill {
  skillName: string
  proficiencyLevel: number
  id: string
}

export interface ISkillGroup {
  skillGroupName: string
  id: string
  skills: ISkill[]
}
