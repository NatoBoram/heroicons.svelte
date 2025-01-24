<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSlashSvelte from '../../../lib/24/solid/eye-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EyeSlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EyeSlash" />
