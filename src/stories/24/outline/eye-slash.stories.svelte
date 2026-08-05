<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSlashSvelte from '../../../lib/24/outline/eye-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EyeSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="EyeSlash" />
