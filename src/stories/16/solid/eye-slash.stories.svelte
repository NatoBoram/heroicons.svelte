<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSlashSvelte from '../../../lib/16/solid/eye-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EyeSlashSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EyeSlash" />
