import type { Meta, StoryObj } from '@storybook/svelte'
import { Wrench as WrenchSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: WrenchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WrenchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wrench: Story = {}