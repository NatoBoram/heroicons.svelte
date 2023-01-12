import type { Meta, StoryObj } from '@storybook/svelte'
import { EyeSlash as EyeSlashSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: EyeSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeSlash: Story = {}
