import type { Meta, StoryObj } from '@storybook/svelte'
import EyeSlashSvelte from '../../../lib/16/solid/eye-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EyeSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EyeSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeSlash: Story = {}
