<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellSlashSvelte from '../../../lib/16/solid/bell-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BellSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="BellSlash" />
