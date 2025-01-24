<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSlashSvelte from '../../../lib/24/outline/bell-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BellSlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BellSlash" />
