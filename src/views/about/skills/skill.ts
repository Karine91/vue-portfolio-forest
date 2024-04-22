export interface ISkill {
  skillName: string
  proficiencyLevel: number
}

export interface ISkillGroup {
  skillGroupName: string
  id: string
  skills: ISkill[]
}
