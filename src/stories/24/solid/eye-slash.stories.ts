import type { Meta, StoryObj } from '@storybook/svelte'
import EyeSlashSvelte from '../../../lib/24/solid/eye-slash.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: EyeSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EyeSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeSlash: Story = {}
