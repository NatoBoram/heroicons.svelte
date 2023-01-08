import type { Meta, StoryObj } from '@storybook/svelte'
import { Moon as MoonSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: MoonSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MoonSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Moon: Story = {}
