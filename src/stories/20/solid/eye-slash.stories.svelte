<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSlashSvelte from '../../../lib/20/solid/eye-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EyeSlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="EyeSlash" />
