import type { Meta, StoryObj } from '@storybook/svelte'
import { Lifebuoy as LifebuoySvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: LifebuoySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LifebuoySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Lifebuoy: Story = {}
